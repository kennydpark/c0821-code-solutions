select "a"."line1",
      "a"."district",
      "c"."name" as "city"
from "addresses" as "a"
join "cities" as "c" using ("cityId");
