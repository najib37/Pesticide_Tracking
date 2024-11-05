from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
# from django_filter  import rest_framework as filters
from .models import Marker
from .serializers import MarkerSerializer

# class MarkerFilter(filters.FilterSet):
#     min_lat = filters.NumberFilter(field_name="latitude", lookup_expr='gte')
#     max_lat = filters.NumberFilter(field_name="latitude", lookup_expr='lte')
#     min_lng = filters.NumberFilter(field_name="longitude", lookup_expr='gte')
#     max_lng = filters.NumberFilter(field_name="longitude", lookup_expr='lte')
#     name = filters.CharFilter(lookup_expr='icontains')
#
#     class Meta:
#         model = Marker
#         fields = ['min_lat', 'max_lat', 'min_lng', 'max_lng', 'name']

class MarkerViewSet(viewsets.ModelViewSet):
    queryset = Marker.objects.all()
    serializer_class = MarkerSerializer
    # filterset_class = MarkerFilter
    search_fields = ['name', 'desc']
    ordering_fields = ['created_at', 'name']

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset
