import { SERVICES } from '../data'
import { ActionPanel, Action, List } from '@raycast/api'

export default function Command() {
  return (
    <List>
      {SERVICES.map((item) => (
        <List.Item
          key={item.id}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser url={item.url} />
            </ActionPanel>
          }
        />
      ))}
    </List>
  )
}
