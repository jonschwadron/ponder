from datetime import datetime
from django.db import models
from authentication.models import Account
from django.contrib.humanize.templatetags.humanize import naturaltime

class Post(models.Model):
    author = models.ForeignKey(Account)
    content = models.TextField()

    #created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    
    def created_at_to_naturaltime(self):
    	return naturaltime(self.created_at)

    def __unicode__(self):
        return '{0}'.format(self.content)
