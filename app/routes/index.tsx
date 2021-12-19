import { useLoaderData } from "remix";
import doge from "~/images/doge.jpg";

type LoaderData = Array<{
  image: string;
}>;

export const loader = (): LoaderData => [{ image: doge }];

export default function Index() {
  const data = useLoaderData<LoaderData>();
  return (
    <>
      Look ma, it's a doge!
      {data.map(({ image }) => (
        <img key={image} src={image} />
      ))}
    </>
  );
}
