import type { MetaFunction } from "@remix-run/cloudflare";
import { MatchSchedule } from '../components/cricket';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <MatchSchedule />
  );
}
