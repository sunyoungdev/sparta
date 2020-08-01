professor_wizards = [
    {'name': '덤블도어', 'age': 116},
    {'name': '맥고나걸', 'age': 85},
    {'name': '스네이프', 'age': 60},
]

def get_age(name, wizards):
    for wizard in wizards:
        if wizard['name'] == name:
            return wizard['age']
    return 'wrong name'

print(get_age('덤블도',professor_wizards))