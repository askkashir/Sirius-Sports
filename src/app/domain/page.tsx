import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {CodeBlock} from '@/components/code-block';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const dnsRecords = [
  {type: 'A', name: '@', value: '151.101.1.195, 151.101.65.195'},
  {
    type: 'AAAA',
    name: '@',
    value: '2a04:4e42::703, 2a04:4e42:200::703',
  },
  {type: 'CNAME', name: 'www', value: 'your-project.web.app'},
];

export default function DomainPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Custom Domain Setup</h1>
        <p className="text-muted-foreground">
          Connect a custom domain to give your project a professional URL.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>1. Add Custom Domain in Firebase</CardTitle>
          <CardDescription>
            Start by adding your domain in the Firebase Console.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-decimal space-y-2 pl-5 text-sm">
            <li>
              Navigate to the{' '}
              <span className="font-semibold">Hosting</span> section of your
              Firebase project.
            </li>
            <li>Click on the "Add custom domain" button.</li>
            <li>
              Enter the domain name you want to connect (e.g.,
              `www.yourdomain.com`).
            </li>
            <li>
              Follow the on-screen instructions to verify domain ownership.
              This usually involves adding a TXT record to your DNS settings.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>2. Configure DNS Records</CardTitle>
          <CardDescription>
            After verification, Firebase will provide you with DNS records to
            point your domain to Firebase Hosting. Go to your domain
            registrar's or DNS provider's website and add the following
            records.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Name (Host)</TableHead>
                  <TableHead>Value (Points to)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dnsRecords.map(record => (
                  <TableRow key={record.type + record.name}>
                    <TableCell className="font-medium">{record.type}</TableCell>
                    <TableCell>
                      <span className="font-mono">{record.name}</span>
                    </TableCell>
                    <TableCell>
                      <span className="font-mono">{record.value}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Note: DNS propagation can take up to 48 hours, but it's often much
            faster. Firebase will automatically provision an SSL certificate
            for your domain once the DNS settings are correct.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
