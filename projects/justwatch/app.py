from justwatch import JustWatch

just_watch = JustWatch(country='KR')

results_by_multiple = just_watch.search_for_item(
    providers=['wav','wac'],
    content_types=['movie']
)
print(results_by_multiple)