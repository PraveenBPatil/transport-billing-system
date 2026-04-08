def get_rate(trips, slabs):
    for slab in slabs:
        if slab["min"] <= trips <= slab["max"]:
            return slab["rate"]
    return 0


def calculate_slab(data):
    trips = data["trips"]

    client_rate = get_rate(trips, data["client_slabs"])
    vendor_rate = get_rate(trips, data["vendor_slabs"])
    driver_rate = get_rate(trips, data["driver_slabs"])

    client = trips * client_rate
    vendor = trips * vendor_rate
    driver = trips * driver_rate

    return {
        "client_amount": client,
        "vendor_amount": vendor,
        "driver_amount": driver,
        "margin": client - vendor,
        "used_rates": {
            "client_rate": client_rate,
            "vendor_rate": vendor_rate,
            "driver_rate": driver_rate
        }
    }