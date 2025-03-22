import Image from 'next/image';

const Tweets = () => {
  return (
    <div className="my-20">
      <h2 className="text-xl font-semibold">Loved by Developers</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-center mt-4">
        <Tweet
          username="theo"
          name="Theo - t3.gg"
          avatarUrl="https://pbs.twimg.com/profile_images/1799982162831396865/Fnol01I1_400x400.jpg"
          content="Wait this is so useful"
          url="https://x.com/theo/status/1890857741012332753"
        />
        <Tweet
          username="bedesqui"
          name="Igor bedesqui"
          avatarUrl="https://pbs.twimg.com/profile_images/1569386242080399361/DvmcYbkO_400x400.jpg"
          content="huge"
          url="https://x.com/bedesqui/status/1890885944930087411"
        />
        <Tweet
          username="dakdevs"
          name="Dak"
          avatarUrl="https://pbs.twimg.com/profile_images/1794572007432224768/RJqW0j6b_400x400.jpg"
          content="Holy this is awesome!"
          url="https://x.com/dakdevs/status/1890878079955869774"
        />
        <Tweet
          username="Lermatroid"
          name="Liam Murray"
          avatarUrl="https://pbs.twimg.com/profile_images/1895909837940133888/avR72KXc_400x400.jpg"
          content="This looks sick 👀"
          url="https://x.com/Lermatroid/status/1891223229156467047"
        />
      </div>
    </div>
  );
};

const Tweet = ({
  username,
  name,
  avatarUrl,
  content,
  url,
}: {
  username: string;
  name: string;
  avatarUrl: string;
  content: string;
  url: string;
}) => {
  return (
    <a
      className="bg-fd-secondary p-6 rounded-2xl flex-1"
      href={url}
      target="_blank"
    >
      <div className="flex gap-2">
        <Image
          src={avatarUrl}
          alt="X avatar"
          height={128}
          width={128}
          className="size-10 rounded-full"
        />
        <div>
          <div className="font-medium">{name}</div>
          <div className="font-light text-sm text-fd-muted-foreground -mt-1">
            @{username}
          </div>
        </div>
      </div>
      <p className="mt-3">{content}</p>
    </a>
  );
};

export default Tweets;
