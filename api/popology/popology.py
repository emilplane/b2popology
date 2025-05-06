class Tower:
    def __init__(self, tower_json):
        self.tower_json = tower_json
        return

    def get_display_name(self):
        return self.tower_json.get("display_name", None) or None

    def get_last_changed_version(self):
        return self.tower_json.get("last_changed_version", None) or None

    def get_category(self):
        return self.tower_json.get("category", None) or None

    def get_tower_info(self):
        return {
            "display_name": self.get_display_name(),
            "last_changed_version": self.get_last_changed_version(),
            "category": self.get_category()
        }