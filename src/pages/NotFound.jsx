import { Button, Icon } from '../components/ui'

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center gap-stack-md py-stack-lg text-center">
      <Icon name="plane" className="size-12 text-primary" />
      <p className="font-display text-display-lg text-primary">404</p>
      <h1 className="text-headline-md">This route isn’t on the schedule</h1>
      <p className="max-w-md text-body-md text-secondary">
        The page you were looking for has been moved or never existed.
      </p>
      <Button to="/">
        <Icon name="arrowLeft" className="size-4" />
        Back to home
      </Button>
    </div>
  )
}
