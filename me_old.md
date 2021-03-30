---
layout: post
title: Jay Hennig
category: listed
css: about
js: jquery.shorten
js2: about
---
{% include JB/setup %}

<!-- <img id="profile" src="assets/images/self.png" style=""/> -->
<img id="profile" src="assets/images/jay-hennig-photo.jpg"/>

Hi! I am a PhD student in neural computation and machine learning at Carnegie Mellon University, advised by [Byron Yu](https://users.ece.cmu.edu/~byronyu/) and [Steve Chase](http://www.cnbc.cmu.edu/~schase/index.php). You can email me at <img src="/assets/images/email.png" style="width: 7em;"/>, or find me on twitter [@jehosafet](https://twitter.com/jehosafet).

<div id="contact-buttons">
<a href="/assets/pdf/JayHennig-CV.pdf" class="button green"><img src="/assets/images/icons/cv.png" width="12px;">&nbsp;&nbsp;CV</a>
<a href="https://scholar.google.com/citations?user=Tyl65TEAAAAJ&hl=en" class="button green"><img src="/assets/images/icons/scholar.png" width="19px;">&nbsp;&nbsp;Scholar</a>
<a href="https://github.com/mobeets/" class="button green"><img src="/assets/images/icons/github.png" width="16px;">&nbsp;&nbsp;Github</a>
</div>

## Research

I'm interested in using techniques from statistics and machine learning to understand how populations of neurons interact to perceive the world and drive behavior.

<ul class="papers">
{% for item in site.data.papers.papers %}
<!-- <hr> -->
<li class="paper-item"><span class="item-title">"{{ item.title }}"</span> <span style="font-size: small;"><a href="{{ item.url }}">[link]</a> <a href="/assets/pdf/papers/{{ item.image }}.pdf">[pdf]</a> {% if item.demo %} <a href="{{ item.demo }}">[demo]</a> {% endif %} </span><br/>
	<span style="font-size: small; color: gray;">{{ item.authors }}</span><br><span style="font-size: small;"><i>{{ item.journal }}</i> ({{ item.year }})</span><br/>
	<div class="item-content">
		<img src="/assets/images/academic/{{ item.image }}.{{ item.imagetype }}" width="200px" class="item-image">
		<p class="item-brief"><i>Summary:</i> {{ item.briefly }}</p><br/>
		<!-- <p class="item-blurb"><b>Abstract:</b> <span class="item-comments">{{ item.summary }}</span></p> -->
	</div>
	</li>
{% endfor %}
</ul>
