select "f"."releaseYear",
      "c"."name" as "categories"
from "films" as "f"
join "filmCategory" as "fc" using ("filmId")
join "categories" as "c" using ("categoryId")
where "title" = 'Boogie Amelie';
