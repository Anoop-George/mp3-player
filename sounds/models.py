from django.db import models
from django.conf import settings
from PIL import Image

class Music(models.Model):
    
    genres=[('p','pop'),('r','rock'),('c','classic')]
    name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='images',null=True,blank=True)
    track = models.FileField(upload_to='tracks')
    like = models.ManyToManyField(settings.AUTH_USER_MODEL,blank=True,related_name='like')
    featured = models.BooleanField(default=False)
    genre = models.CharField(max_length=100,choices=genres)
    
    def __str__(self):
        return self.name

