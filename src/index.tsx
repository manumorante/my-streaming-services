import { ActionPanel, Action, Icon, List } from "@raycast/api";

const ITEMS = [
  {
    id: 1,
    title: "Netflix",
    icon: "netflix.ico",
    subtitle: "",
    accessory: "",
    accessoryIcon: Icon.CheckCircle,
    url: "https://www.netflix.com",
  },
  {
    id: 2,
    title: "Disney+",
    icon: "disneyplus.ico",
    subtitle: "",
    accessory: "",
    accessoryIcon: Icon.CheckCircle,
    url: "https://www.disneyplus.com/es-es/home",
  },
  {
    id: 3,
    title: "HBO",
    icon: "hbo.ico",
    subtitle: "",
    accessory: "",
    accessoryIcon: Icon.CheckCircle,
    url: "https://play.hbomax.com/page/urn:hbo:page:home",
  },
  {
    id: 4,
    title: "Prime Video",
    icon: "primevideo.ico",
    subtitle: "",
    accessory: "",
    accessoryIcon: Icon.CheckCircle,
    url: "https://www.primevideo.com/",
  },
  {
    id: 5,
    title: "Apple TV+",
    icon: "appletv.ico",
    subtitle: "",
    accessory: "",
    accessoryIcon: Icon.CheckCircle,
    url: "https://tv.apple.com/es",
  },
  {
    id: 6,
    title: "Filmin",
    icon: "filmin.webp",
    subtitle: "",
    accessory: "",
    accessoryIcon: Icon.Circle,
    url: "https://www.filmin.es",
  },
];

export default function Command() {
  return (
    <List>
      {ITEMS.map((item) => (
        <List.Item
          key={item.id}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          accessories={[{ icon: item.accessoryIcon, text: item.accessory }]}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={item.url} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  );
}
