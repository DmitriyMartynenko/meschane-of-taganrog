from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExcursionOrderViewSet

router = DefaultRouter()
router.register(r'excursions', ExcursionOrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]