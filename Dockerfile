FROM python:2.7
ENV PYTHONUNBUFFERED 1

RUN mkdir /code
WORKDIR /code

RUN pip install -Iv Django==1.8.1
RUN pip install -Iv django-cors-headers==1.1.0
RUN pip install -Iv ecdsa==0.13
RUN pip install -Iv Fabric==1.10.2
RUN pip install -Iv nodeenv==0.13.6
RUN pip install -Iv paramiko==1.16.0
RUN pip install -Iv pycrypto==2.6.1

ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code



EXPOSE 3035

CMD [ "python", "/code/manage.py", "runserver", "0.0.0.0:3035", "--insecure" ]
