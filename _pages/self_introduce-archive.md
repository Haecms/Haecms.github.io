---
title: "블로그소개"
layout: archive
permalink: /self_introduce/
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.introduce %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}