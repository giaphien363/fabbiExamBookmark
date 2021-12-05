from django.urls import path
from .views import DetailEvent, BookmarkAPIView

# prefix = api/v1/bookmark/

urlpatterns = [
   path('', BookmarkAPIView.as_view(), name='bookmark'),
   path('<int:pk>/', DetailEvent.as_view(), name='bookmark_detail')
]
