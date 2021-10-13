select "categories"."name" as "category",
        count("categoryId") as "total"
from "actors"
join "castMembers" using ("actorId")
join "filmCategory" using ("filmId")
join "categories" using ("categoryId")
where "actorId" = 178
group by "categories"."categoryId";
