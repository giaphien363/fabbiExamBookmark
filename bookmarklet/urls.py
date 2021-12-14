from django.contrib import admin
from django.urls import path, include

from rest_framework import permissions

# add rest swagger
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Hiencoday",
        default_version='v1',
        description="Display all route",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="admin@admin.com"),
        license=openapi.License(name="Test License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('', include('apps.social_login.urls')),

    # path('url/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    path('admin/', admin.site.urls),
    path('api/v1/bookmark/', include('apps.bookmark.urls')),

    path('api/v1/category/', include('apps.category.urls')),
]
