# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0004_auto_20150630_2315'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2015, 7, 1, 6, 50, 46, 609985), blank=True),
            preserve_default=True,
        ),
    ]
