---
title: Python's Walrus Operator Is an Antipattern
date: 2026-05-22
---

I was reading some low-level Python networking code and stumbled across the walrus operator `:=` . It was introduced in Python 3.8 and lets you assign a value inside an expression.

According to the Python documentation, it is known as "the walrus operator" because it looks like the eyes and tusks of a walrus (incredible naming btw).

Below is the code snippet. We are receiving up to 4096 bytes of data, assigning to a variable and checking if the first byte is `0x45`:

```python
if (data := sock.recv(4096)) and data[0] == 0x45:
    print("looks like an IPv4 packet")
```

Without the walrus operator, you would write it like this:

```python
data = sock.recv(4096)
first_byte = data[0]

if first_byte == 0x45:
    print("looks like an IPv4 packet")
```

Compared to a regular assignment, the walrus version is shorter but notice how it makes the code slightly harder to read. That is the trade-off we are concerned about.

## Final Reflection

I would much rather have an extra line or two if it makes the code easier to read. Python is popular because it is usually clear. You can often understand Python code without being a Python expert. The walrus operator works against that when it is used badly. Or really when it is used at all.

A trend I see with [Pythonistas](https://en.wiktionary.org/wiki/Pythonista) is trying to cram everything into one line in the pursuit of being more "Pythonic". Unfortunately, this foolish pursuit inadvertently leads us to obfuscating code.

Bit strange why Python added it, given readability is such a big part of the language? But anyway, use it if it genuinely makes the code cleaner. But most of the time, regular assignment is better. Be boring. Write the extra line. Developers reviewing your code will thank you.
