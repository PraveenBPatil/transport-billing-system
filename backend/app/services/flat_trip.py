def calculate_flat(data):
    trips = data["trips"]

    client = trips * data["client_rate"]
    vendor = trips * data["vendor_rate"]
    driver = trips * data["driver_rate"]

    return {
        "client_amount": client,
        "vendor_amount": vendor,
        "driver_amount": driver,
        "margin": client - vendor
    }