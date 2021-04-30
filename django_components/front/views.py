from django.shortcuts import render, HttpResponse, render_to_response

def index(request, param=''):
	return render_to_response('layout/base.html')


#### LAYOUT VIEWS #### 

def header(request):
	return render_to_response('layout/header.html')

def main(request):
	return render_to_response('section/main.html')

def footer(request):
	return render_to_response('layout/footer.html')


#### SECTION VIEWS #### 

def home(request):
	return render_to_response('section/home.html')

def aboutus(request):
	return render_to_response('section/aboutus.html')

def aboutusfoo(request):
	return render_to_response('section/aboutus.html')

def whatwedo(request):
	return render_to_response('section/whatwedo.html')

def whatwedofoo(request):
	return render_to_response('section/whatwedo.html')

def contact(request):
	return render_to_response('section/contact.html')

def terms(request):
	return render_to_response('section/terms.html')


#### BLOCK VIEWS #### 

def modal_success(request):
	return render_to_response('block/success.html')

def modal_error(request):
	return render_to_response('block/error.html')

def challenge(request):
	return HttpResponse('SM90lIyBhK9ldPQ-m__yi9zvCsWsgRP61XJgig9bxBI.ROJt6qUhmmn0UaHbd-OcDEiLZVnE6klzI57DmiEMZHA')
