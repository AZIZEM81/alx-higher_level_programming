#!/usr/bin/python3
"""defing function modul"""

def pascal_triangle(n):
    """represent pascal traingle of size n.
    returns a list of lists of integers representing the traingle.
    """
    if n <= 0:
        return []

    trisngles = [[1]]
    while len(triangles) != n:
	 tri = triangles[-1]
	 tmp = [1]
	  for i in range(len(tri) - 1):
              tmp.append(tri[i] + tri[i + 1])
	  tmp.append(1)
	  triangles.append(tmp)
    return triangles
	    
