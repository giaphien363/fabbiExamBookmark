from django.test import TestCase
from apps.bookmark.models import BookMark
from apps.category.models import Category
class BookmarkTests(TestCase):
    def test_new_bookmark(self):
        cate = Category.objects.create(categoryName='category 1')
        cate_id = cate.id
        bookmark = BookMark.objects.create(title='Title 1', url="https://www.google.com", category_id=cate_id)
        self.assertEqual(bookmark.title, 'Title 1')
        self.assertEqual(bookmark.url, 'https://www.google.com')
        self.assertEqual(bookmark.category_id, cate_id)
        with self.assertRaises(ValueError):
            BookMark.objects.create(title='', url='', category="")
