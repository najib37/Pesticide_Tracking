from rest_framework import serializers
from .models import Marker

class MarkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marker
        fields = ['id', 'lat', 'lng', 'name', 'desc', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

    def validate(self, data):
        """
        Custom validation to ensure lat and lng are valid
        """
        if not (-90 <= data['lat'] <= 90):
            raise serializers.ValidationError("lat must be between -90 and 90 degrees")
        if not (-180 <= data['lng'] <= 180):
            raise serializers.ValidationError("lng must be between -180 and 180 degrees")
        return data

