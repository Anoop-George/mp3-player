from django.db import models
from django.contrib.auth.models import AbstractUser
from PIL import Image

class User(AbstractUser):
    #email = models.EmailField(verbose_name='email' ,max_length=223,blank=True,null=True)
    #photo = models.ImageField(upload_to='prof_pic', blank=True,null=True)
    #phone=models.CharField(null=True,max_length=11,blank=True)
    #adress = models.CharField(max_length=200,null=True,blank=True)
    pass
    #USERNAME_FIELD = 'email'
            
            
        

        