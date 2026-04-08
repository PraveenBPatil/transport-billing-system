def calculate_shift(data):
    shifts = data["shifts"]

    client = shifts * data["client_rate"]
    vendor = shifts * data["vendor_rate"]
    driver = shifts * data["driver_rate"]

    return {
        "client_amount": client,
        "vendor_amount": vendor,
        "driver_amount": driver,
        "margin": client - vendor
    }