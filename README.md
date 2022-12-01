# applemojis
An Open-Source library for Apple emojis

## Installation

Using npm:
```
$ npm i applemojis
```

## Usage
import to project;

```
import applemojis from 'applemojis';
```

## Methods

- Get All emojis: get a all emojis objects by calling the function ```applemojis.getAll()``` function on applemojis
```
applemojis.getAll();
```

- Get one emoji by code: get a spacific emoji by passing the emoji code to the ```getOneByCode()``` function on applemojis
```
applemojis.getOneByCode("U+1F600");
```

- Get one emoji by short name: get a specific emoji by passing the emoji's short name to the ```getOneByShortName()``` function on applemojis **[Not available yet]**

# Preview
<img width="1280" alt="image" src="https://user-images.githubusercontent.com/42372656/204881655-b7dd4ed6-d249-4485-beca-68bf457f1348.png">


# Why did you make this?
I am honestly a huge fan of the apple emoji pallet and its unique design style. The problem is, their emojis are only available on apple devices. applemoji helps change that and makes those cool and visually appealing emojis available to everyone on every platform.

emojis source: here [https://unicode.org/emoji/charts/full-emoji-list.html]
