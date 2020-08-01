def count_fruit(name, fruit_list):
    count = 0
    for fruit in fruit_list:
        if fruit == name:
            count += 1

    return count


fruits = ['사과', '배', '수박', '배']
result = count_fruit('배', fruits)
print(result)

wizards_list = [
    {'name': 'harry', 'age': '40'},
    {'name': 'ron', 'age': '41'},
    {'name': 'hermione', 'age': '40'}
]


for wizard in wizards_list:
    print(wizard['age'])
