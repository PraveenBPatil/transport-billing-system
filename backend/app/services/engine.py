from services.flat_trip import calculate_flat
from services.monthly import calculate_monthly
from services.slab import calculate_slab
from services.shift import calculate_shift

# Mapping models
MODEL_MAP = {
    "flat": calculate_flat,
    "monthly": calculate_monthly,
    "slab": calculate_slab,
    "shift": calculate_shift
}


def calculate_bill(data):
    model = data.get("model")

    if model not in MODEL_MAP:
        return {"error": "Invalid model type"}

    return MODEL_MAP[model](data)