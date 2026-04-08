from fastapi import APIRouter
from database import get_connection
from services.engine import calculate_bill   # ✅ use engine (clean approach)

router = APIRouter()


# ✅ Add Trip API
@router.post("/add-trip")
def add_trip(data: dict):
    try:
        conn = get_connection()
        cursor = conn.cursor()

        query = """
        INSERT INTO trips 
        (date, vehicle_number, model_type, trips, client_rate, vendor_rate, driver_rate)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        """

        values = (
            data["date"],
            data["vehicle_number"],
            data["model_type"],
            data["trips"],
            data["client_rate"],
            data["vendor_rate"],
            data["driver_rate"]
        )

        cursor.execute(query, values)
        conn.commit()

        return {"message": "Trip Added Successfully ✅"}

    except Exception as e:
        return {"error": str(e)}


# ✅ Calculate API (Professional Engine)
@router.post("/calculate")
def calculate(data: dict):
    try:
        return calculate_bill(data)   # ✅ dynamic model handler
    except Exception as e:
        return {"error": str(e)}