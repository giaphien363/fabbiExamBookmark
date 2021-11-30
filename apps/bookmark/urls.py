from django.urls import path
from .views import DetailEvent, BookmarkAPIView

urlpatterns = [
   path('', BookmarkAPIView.as_view(), name='bookmark'),
   path('<int:pk>/', DetailEvent.as_view(), name='bookmark_detail')
]
