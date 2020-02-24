---
layout: post
title: Jay Hennig
category: listed
css: about
---
{% include JB/setup %}
<br>
<!-- <img id="profile" src="assets/images/self.png" style=""/> -->
<img id="profile" src="assets/images/jay-hennig-photo.jpg"/>
Hi! I am a PhD student in [Neural Computation](https://compneuro.cmu.edu/) and Machine Learning at Carnegie Mellon University, advised by [Byron Yu](https://users.ece.cmu.edu/~byronyu/) and [Steve Chase](http://www.cnbc.cmu.edu/~schase/index.php).

I'm interested in using techniques from statistics and machine learning to understand how populations of neurons interact to perceive the world and drive behavior.

You can email me at <img src="/assets/images/email.png" style="width: 20%;"/>, or find me on twitter [@jehosafet](https://twitter.com/jehosafet).

<div id="contact-buttons">
<a href="/assets/pdf/JayHennig-CV.pdf" class="button green">CV</a>
<a href="https://scholar.google.com/citations?user=Tyl65TEAAAAJ&hl=en" class="button green">Google Scholar</a>
<a href="https://github.com/mobeets/" class="button green">Github</a>
</div>

## Academic papers

<ul>
{% for item in site.data.papers.papers %}
<!-- <hr> -->
<li>"{{ item.title }}" <span style="font-size: small;"><a href="{{ item.url }}">[link]</a> <a href="/assets/pdf/papers/{{ item.image }}.pdf">[pdf]</a></span></li>
	<span style="font-size: small; color: gray;">{{ item.authors }}</span><br><span style="font-size: small;"><i>{{ item.journal }}</i> ({{ item.year }})</span><br/>
	<img src="/assets/images/academic/{{ item.image }}.png" width="200px"><br/><br/>
{% endfor %}
</ul>
