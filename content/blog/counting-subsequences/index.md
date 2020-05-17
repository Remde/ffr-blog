---
title: Number of distinct subsequences of string2 in string1
date: "2020-05-17T10:12:03.284Z"
description: "Dynamic programming problem walkthrough"
---


<p>I got this problem in an interview this week and found it very interesting. Well... To be honest, at first glance, I found it intimidating.

<h3>The problem</h3>
<p>Given two strings, s1 and s2, how many subsequences of s1 are equal to s2? Example:</p>
<p>s1 = ABCABC, s2 = ABC

Answer: 4.

The matches are: [s[0],s1[1],s1[2]], [s1[0],s1[1],s1[5]], [s1[0], s1[4], s1[5]], [s1[3],s1[4],s1[5]].</p>
<p>I will refer to this example as "main example" throughout this explanation.</p>


<h3>Intuition</h3>
<p>I broke up this problem in two situations. Either the last digit was the same or it wasn't.</p>
<p>If it wasn't the same, we could search for subsequences ignoring the last digit in s1. For instance, if s1 = ABCABCD and s2 = ABC, there wouldn't be any difference from the main example. The answer would still be 4, and the indexes the same. So we could ignore the D and look for solutions in the rest of the string.</p>
<p>The second case is a bit more tricky. When last digit is the same for both strings, we have again two situations. You either USE the last digit of string1 or you don't. For instance, in the first array of the solution for the main example, we didn't use the last digit, s[5]. In this case, we do just like we did before. We ignore it and look for solutions in (string1.length - 1). For the other three we did, so in this case we look for the rest of the solution in (string1.length-1) and (string2.length-1).</p>
<p>This is the complicated part. Read as many times as needed. When you truly understand this the rest of the problem comes very easily.</p>

<h3>Exponential solution</h3>
<p>There's a recursive, exponential solution to this problem that came quickly to me. I won't be going through it because I didn't think it was acceptable. It follows the same intuition as the dynamic approach, so it's trivial once you understand the principle.<p>

<h3>Dynamic programming</h3>
<p>As per usual with dynamic programming, we'll use a lookup table to store the subproblem results we find. This is the difference between this approach and the recursive approach, by the way. The recursive approach will just recalculate them every time.</p>
<p>I solved this problem in Python, which I actually am not a huge fan for dynamic programming solutions, but I was a little nervous and using my "main language for problems" so to speak felt more comfortable at the time. Anyway, going through the solution:

```python
len1 = len(string1)
len2 = len(string2)
table = [[0] * (len1 + 1) for i in range(len2 + 1)]
```
This creates our look-up table. Using the main example, we'll have 4 columns to represent string2, "ABC", and our 7 rows for "ABCABC." Why 4 and 7 instead of 3 and 6? You have to count the base case where both strings are empty.

```python
for i in range(n+1):
    lookup[0][i] = 0

for i in range(m + 1):
    lookup[i][0] = 1
```
Now we filled the first row and first column. They will look like this:

|            | " "  | A        | B           | C  |
|:-------------:| -----:| ------------- |:-------------:| -----:|
| " " | 1 | 0      | 0 | 0 |
| A      |   1 |       |       |    |
| B      |    1 |   |       |     |
| C      |   1 |         |       |    |
| A      |    1 |   |        |     |
| B      |   1 |        |       |    |
| C      |    1 |   |        |     |

This is the base table. Take a look at it and try to comprehend. If both are empty, then there's one substring found, " " itself. If string2 is " ", the final count will always be one, since the only match will be " ". If string2 is anything but empty, however, and string1 is empty, there won't be any matches. It's easy once it clicks!
Now let's go through the rest of the table and fill it. I will explain the logic afterwards.

```python
for i in range(1, len1 + 1):
  for j in range(1, len2 + 1):
    if string1[i - 1] == string2[j - 1]:
      table[i][j] = table[i - 1][j - 1] + table[i - 1][j]  
    else:
      table[i][j] = table[i - 1][j]
```
I will refer to table[A1,B], for example, as the place where the first A of "ABCABC" and the B of "ABC" intersect for the purpose of clarity.
When we go to table[A1,A], it's a match. There's an A in A1. So we add the values of the cell on top of it and the cell on top-left of it. So, for instance, when we go to table[B1,B], the result will be the sum of table[A1,B] and table[A1,A]. So, back to table[A1,A], we fill it with table[" ",A] + table[" "," "]. Thats our first if clause.

If they are no match, our else clause, we just copy the value to the top of our cell. So when we have table[B1,A], there's no match, so it just copies [A1, A], which is one. This way we carry forward our current result when there are no matches.

Following the algorithm, the final table will be this:

|               | " "  | A             | B             | C     |
|:-------------:| ----:| ------------- |:-------------:| -----:|
| " "           |  1   | 0             | 0             |  0    |
| A             |   1  |    1          |     0         |   0   |
| B             |    1 |     1         |     1         |  0    |
| C             |   1  |   1           |     1         |   1   |
| A             |    1 |      2        |    1          |   1   |
| B             |   1  |       2       |      3        |    1  |
| C             |    1 |        2      |      3        |   4   |

We finally have our final result at the end of our table. So we return it.

```python
return table[len1][len2]
```

This is O(NM) time and space solution, m and n being the length for each string.

<p></p>
<h3>Final thoughts</h3>

<p>That is a very hard problem to understand, but after it clicks it's really simple. I'm not sure how I feel about having this in an interview. Dynamic programming, to me, seems less about algorithmic thinking and manipulation of data and more of having an "A-HA!" moment and going from there.
It's an interesting problem, though. I don't know how well I explained it. Probably not very! But, as I said before, it's very easy once it clicks.</p>
