def calculate_monthly(data):
    client = data["client_base"] + (data["extra_km"] * data["client_km_rate"]) + (data["extra_hours"] * data["client_hour_rate"])
    vendor = data["vendor_base"] + (data["extra_km"] * data["vendor_km_rate"]) + (data["extra_hours"] * data["vendor_hour_rate"])
    driver = data["driver_base"] + (data["extra_km"] * data["driver_km_rate"]) + (data["extra_hours"] * data["driver_hour_rate"])

    return {
        "client_amount": client,
        "vendor_amount": vendor,
        "driver_amount": driver,
        "margin": client - vendor
    }