import { db, Admins } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Admins).values([
    {
      id: 1,
      name: "Albertobp",
      job: "fundador",
      urlimage: "https://pbs.twimg.com/profile_images/1327592670865354753/9eRj0iAx_400x400.jpg",
      urlsocial: "https://www.instagram.com/gury_00?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    },
  ]);
}
