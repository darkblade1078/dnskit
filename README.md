# dnskit

## Authors

- [@darkblade](https://github.com/darkblade1078)


## Installation

Install dnskit with npm

```bash
  npm install dnskit
```
    
## Usage/Examples

### API Calls
Call whatever data you want with queries
```javascript
dnskit.setKey('api key');

const nation = await dnskit.nationCall({ nationId: 2400 });

console.log(`Nation name: ${nation.NationName}`);
```


## Supported API Features
Here is a list of all supported calls
### API Calls
