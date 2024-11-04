from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MarkerViewSet

router = DefaultRouter()
router.register(r'marker', MarkerViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

