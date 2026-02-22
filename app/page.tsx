import {loadCrosswords} from "@/data/loadCrosswords";

import App from "@/components/App";

export default async function Page() {
  const crosswords = await loadCrosswords();

  return <App crosswords={crosswords}/>;
}
