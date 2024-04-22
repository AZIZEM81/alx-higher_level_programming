#!/usr/bin/python3
"""Module for Base class."""


class Base:
    """
    Base class for all other classes in this project.
    Manages the id attribute for instances.
    """
    __nb_objects = 0

    def __init__(self, id=None):
        """
        Constructor for the Base class.

        Args:
            id (int, optional): The id of the instance. Defaults to None.
        """
        if id is not None:
            self.id = id
        else:
            Base.__nb_objects += 1
            self.id = Base.__nb_objects
