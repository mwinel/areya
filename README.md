# Areya

A simple but scalable app built based on the **Microservices Architecture** and deployed to the [Digital Ocean Platform](https://digitalocean.com/).

## Tech Stacks

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [NextJS](https://nextjs.org/)
- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)
- [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/)
- [Skaffold](https://skaffold.dev/)
- [MongoDB](https://www.mongodb.com/)
- [NATS streaming server](https://docs.nats.io/nats-streaming-concepts/intro)

## Setting up your dev enviroment

**Docker**

Before you attempt to clone the repo and follow the next steps on how to run the app, ensure you have [Docker](https://www.docker.com/) locally installed on your machine. If not, follow this guide on **[how to set up](https://www.docker.com/get-started)** [Docker](https://www.docker.com/) on your machine.

Run the ` docker ` command to ensure that docker is successfully installed. If you get this error ` 'docker' is not recognized as an internal or external command `, try to reinstall docker correctly or make sure it is added to your path. 

**Kubernetes**

Docker Desktop includes a standalone [Kubernetes](https://kubernetes.io/) server that runs on your local host, so that you can test deploying your Docker workloads on [Kubernetes](https://kubernetes.io/). To enable Kubernetes on your Docker desktop;

- *Open Docker desktop.*
- *Click **settings**.*
- *Under settings select **Kubernetes**.*
- *Check **Enable Kubernetes**.*
- *Click **Apply and Restart**.*

Run the ` kubectl ` command to ensure that docker is successfully installed. If you get this error ` 'kubectl' is not recognized as an internal or external command `, try to reinstall Kubernetes correctly or make sure it is added to your path.

**Skaffold**

Install and set up [Skaffold](https://skaffold.dev/) using this guide on **[how to get started with Skaffold](https://skaffold.dev/docs/quickstart/)**. Run the ` skaffold ` command to ensure that skaffold is successfully installed. If you get this error ` 'skaffold' is not recognized as an internal or external command `, try to reinstall skaffold correctly or make sure it is added to your path.

- **Initialize and configure the google cloud sdk**; first sign in with ` gcloud auth login `. A little window will appear in your browser prompting you to choose the google account you prefer to use to sign in. Sign in with the account you used to create your GCP account.
- Run ` gcloud container clusters get-credentials <cluster-name> ` to install the GPC context locally on Docker Desktop.

**Ingress-Nginx**

Follow this guide to [set up ingress-nginx](https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke) for your GCP project.

**areya.dev domain**

To ensure that everytime we try to visit [areya.dev]() we navigate to the areya.dev on our machine rather than real url on the internet, open your local host file with your favorite editor in ***adminstrator mode***: for example; ` C:\Windows\System32\Drivers\etc\hosts ` on windows or ` etc/hosts ` on mac.

Click **Kubernetes Engines** on your project menu, select **Services and Ingress**. Under services and ingress look for **ingress-nginx-controller**, copy the IP Address and paste it to your hosts file, then append the domain name in this format.

```bash
31.79.218.200 areya.dev
```
Save the file.

## Running the app

Clone the repo.
```bash
git clone https://github.com/mwinel/areya.git
```

CD into the different services one at a time. For example;
```bash
cd auth
```
or 
```bash
cd hospitals
```

Install dependancies.
```bash
npm install
```

After all dependencies in all services have been installed cd to the root folder and run;
```bash
skaffold dev
```

Finally navigate to ` areya.dev ` in your browser to test this app out.

## Running Unit Tests

CD into a given service such as auth or hospitals and run the following command;
```bash
npm run test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)