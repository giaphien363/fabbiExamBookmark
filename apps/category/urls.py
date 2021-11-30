from django.urls import path
from .views import *

# prefix: api/v1/category/

urlpatterns = [
    path('', CategoryView.as_view()),
    path('<int:id>/', CategoryDetailView.as_view()),
]
