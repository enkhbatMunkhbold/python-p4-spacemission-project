from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

from config import db, bcrypt

class User(db.Model, SerializerMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String, nullable=False)
  _password_hash = db.Column(db.String)

  restaurants = db.relationship('Restaurant', back_populates = 'user')
  cuisines = association_proxy('restaurants', 'cuisine')
  serialize_rules = ('-restaurants.user',)

  @hybrid_property
  def password_hash(self):
    raise Exception('Password hashes may not be viewed.')

  @password_hash.setter
  def password_hash(self, password):
      password_hash = bcrypt.generate_password_hash(
          password.encode('utf-8'))
      self._password_hash = password_hash.decode('utf-8')
  def authenticate(self, password):
      return bcrypt.check_password_hash(
          self._password_hash, password.encode('utf-8'))
  
  def __repr__(self):
      return f'User {self.username}, ID: {self.id}'
  

class Cuisine(db.Model, SerializerMixin):
  __tablename__ = "cuisines"

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  region = db.Column(db.String)

  restaurants = db.relationship('Restaurant', back_populates='cuisine')
  users = association_proxy('restaurants', 'user')
  serialize_rules = ('-users',)

  def __repr__(self):
     return f"<Cuisine {self.name}, {self.region}>"
  

class Restaurant(db.Model, SerializerMixin):
  __tablename__ = "restaurants"

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  address = db.Column(db.String, nullable=False)

  cuisine_id = db.Column(db.Integer, db.ForeignKey('cuisines.id'))
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

  users = db.relationship('User', back_populates='restaurants')
  cuisines = db.relationship('Cuisine', back_populates='restaurants')

  serialize_only = ('id', 'name', 'address')

  def __repr__(self):
     return f"<Restaurant {self.name}>"

