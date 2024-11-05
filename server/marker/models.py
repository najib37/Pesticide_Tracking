from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Marker(models.Model):
    lat = models.FloatField(
        validators=[
            MinValueValidator(-90.0),
            MaxValueValidator(90.0)
        ]
    )
    lng = models.FloatField(
        validators=[
            MinValueValidator(-180.0),
            MaxValueValidator(180.0)
        ]
    )
    name = models.CharField(max_length=255)
    desc = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        indexes = [
            models.Index(fields=['lat', 'lng']),
            models.Index(fields=['name']),
        ]
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} ({self.lat}, {self.lng})"
