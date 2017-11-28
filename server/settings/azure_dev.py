import os
import urllib.parse 

ENV = 'dev'
SECRET_KEY = os.getenv('OK_SESSION_KEY', 'changeinproductionkey')

DEBUG = True
ASSETS_DEBUG = True
TESTING_LOGIN = True
DEBUG_TB_INTERCEPT_REDIRECTS = False
INSTANTCLICK = True

db_url = os.getenv('DATABASE_URL')

if db_url:
    if 'mysql' in db_url:
        db_url = db_url.replace('mysql://', 'mysql+mysqlconnector://')
      #  db_url += "&sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"
    else:
        params = urllib.parse.quote_plus(db_url)
        db_url = "mssql+pyodbc:///?odbc_connect=%s" % params

SQLALCHEMY_POOL_RECYCLE = 180
SQLALCHEMY_POOL_TIMEOUT = 60
SQLALCHEMY_DATABASE_URI = db_url
SQLALCHEMY_TRACK_MODIFICATIONS = False

CACHE_TYPE = 'redis'
CACHE_KEY_PREFIX = 'ok-web'

RQ_DEFAULT_HOST = REDIS_HOST = CACHE_REDIS_HOST = os.getenv('REDIS_HOST', 'redis-master')
RQ_DEFAULT_PASSWORD = REDIS_PASSWORD = CACHE_REDIS_PASSWORD = os.getenv('REDIS_PASSWORD')
REDIS_PORT = 6379
RQ_POLL_INTERVAL = 2000


NUM_PROXIES = 1



MAX_CONTENT_LENGTH = 20 * 1024 * 1024  # Max Upload Size is 20MB

STORAGE_PROVIDER = os.environ.get('STORAGE_PROVIDER',  'LOCAL')
STORAGE_SERVER = False
STORAGE_CONTAINER = os.environ.get('STORAGE_CONTAINER',
                                   os.path.abspath("./local-storage"))
STORAGE_KEY = os.environ.get('STORAGE_KEY', '')
STORAGE_SECRET = os.environ.get('STORAGE_SECRET', '')

if STORAGE_PROVIDER == 'LOCAL' and not os.path.exists(STORAGE_CONTAINER):
    os.makedirs(STORAGE_CONTAINER)

GOOGLE_CONSUMER_KEY = ''
