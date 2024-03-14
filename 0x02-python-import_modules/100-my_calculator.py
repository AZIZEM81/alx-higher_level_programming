#!/usr/bin/python3

if __name__ == "__main__":
    """Handle basic arithmetic operations."""
    from calculator_1 import add, sub, mul, div
    import sys

    def print_usage():
        print("Usage: ./100-my_calculator.py <a> <operator> <b>")
        sys.exit(1)

    if len(sys.argv) != 4:
        print_usage()

    ops = {"+": add, "-": sub, "*": mul, "/": div}
    operator = sys.argv[2]
    if operator not in ops:
        print("Unknown operator. Available operators: +, -, * and /")
        sys.exit(1)

    try:
        a = int(sys.argv[1])
        b = int(sys.argv[3])
    except ValueError:
        print_usage()

    result = ops[operator](a, b)
    print("{} {} {} = {}".format(a, operator, b, result))
