#!/usr/bin/python3

"""Defines an inherited class-checking function."""


def inherits_from(obj, a_class):
    """Check if an object is an inherited instance of a class.

    Args:
        obj (any): The object to check.
        a_class (type): The class to compare to.

    Returns:
        If obj is an inherited instance of a_class - True.
        Otherwise - False.
    """
    return issubclass(type(obj), a_class) and type(obj) is not a_class
