#!/usr/bin/python3
"""Module for Rectangle class."""
from models.base import Base


class Rectangle(Base):
    """
    Class that defines a rectangle.
    Inherits from the Base class.
    """

    def __init__(self, width, height, x=0, y=0, id=None):
        """
        Constructor for the Rectangle class.

        Args:
            width (int): The width of the rectangle.
            height (int): The height of the rectangle.
            x (int, optional): The x-coordinate of the rectangle. Defaults to 0.
            y (int, optional): The y-coordinate of the rectangle. Defaults to 0.
            id (int, optional): The ID of the rectangle instance. Defaults to None.
        """
        super().__init__(id)
        self.width = width
        self.height = height
        self.x = x
        self.y = y

    @property
    def width(self):
        """Getter method for the width attribute."""
        return self.__width

    @width.setter
    def width(self, value):
        """Setter method for the width attribute."""
        self.__width = value

    @property
    def height(self):
        """Getter method for the height attribute."""
        return self.__height

    @height.setter
    def height(self, value):
        """Setter method for the height attribute."""
        self.__height = value

    @property
    def x(self):
        """Getter method for the x attribute."""
        return self.__x

    @x.setter
    def x(self, value):
        """Setter method for the x attribute."""
        self.__x = value

    @property
    def y(self):
        """Getter method for the y attribute."""
        return self.__y

    @y.setter
    def y(self, value):
        """Setter method for the y attribute."""
        self.__y = value
