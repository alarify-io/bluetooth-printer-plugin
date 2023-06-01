# hc-bluetooth-printer

bluetooth printer plugin

## Publish plugin
```bash
npm publish --registry https://npm.pkg.jetbrains.space/happytech/p/hc/hc-npm/
```

## Install

```bash
npm install hc-bluetooth-printer
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`status()`](#status)
* [`list()`](#list)
* [`connect(...)`](#connect)
* [`connected()`](#connected)
* [`disconnect()`](#disconnect)
* [`setEncoding(...)`](#setencoding)
* [`printText(...)`](#printtext)
* [`printTextSizeAlign(...)`](#printtextsizealign)
* [`printBase64(...)`](#printbase64)
* [`printTitle(...)`](#printtitle)
* [`printImageUrl(...)`](#printimageurl)
* [`printPOSCommand(...)`](#printposcommand)
* [`printQRCode(...)`](#printqrcode)
* [`printBarcode(...)`](#printbarcode)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### status()

```typescript
status() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### list()

```typescript
list() => Promise<{ value: { name: string; address: string; type: number; }[]; }>
```

**Returns:** <code>Promise&lt;{ value: { name: string; address: string; type: number; }[]; }&gt;</code>

--------------------


### connect(...)

```typescript
connect(options: { name: string; }) => Promise<{ value: string; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ name: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### connected()

```typescript
connected() => Promise<{ value: Boolean; }>
```

**Returns:** <code>Promise&lt;{ value: <a href="#boolean">Boolean</a>; }&gt;</code>

--------------------


### disconnect()

```typescript
disconnect() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### setEncoding(...)

```typescript
setEncoding(options: { encoding: string; }) => Promise<undefined | void>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ encoding: string; }</code> |

--------------------


### printText(...)

```typescript
printText(options: { text: string; }) => Promise<{ value: string; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ text: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### printTextSizeAlign(...)

```typescript
printTextSizeAlign(options: { text: string; size: number; align: number; }) => Promise<{ value: string; }>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code>{ text: string; size: number; align: number; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### printBase64(...)

```typescript
printBase64(options: { imgData: string; align: number; }) => Promise<{ value: string; }>
```

| Param         | Type                                             |
| ------------- | ------------------------------------------------ |
| **`options`** | <code>{ imgData: string; align: number; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### printTitle(...)

```typescript
printTitle(options: { text: string; size: number; align: number; }) => Promise<{ value: string; }>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code>{ text: string; size: number; align: number; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### printImageUrl(...)

```typescript
printImageUrl(options: { url: string; align: number; }) => Promise<{ value: string; }>
```

| Param         | Type                                         |
| ------------- | -------------------------------------------- |
| **`options`** | <code>{ url: string; align: number; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### printPOSCommand(...)

```typescript
printPOSCommand(options: { dataHex: string; }) => Promise<{ value: string; }>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ dataHex: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### printQRCode(...)

```typescript
printQRCode(options: { text: string; align: number; model: number; size: number; eccLevel: number; }) => Promise<{ value: string; }>
```

| Param         | Type                                                                                         |
| ------------- | -------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ text: string; align: number; model: number; size: number; eccLevel: number; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### printBarcode(...)

```typescript
printBarcode(options: { system: number; data: string; align: number; position: number; font: number; height: number; }) => Promise<{ value: string; }>
```

| Param         | Type                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ system: number; data: string; align: number; position: number; font: number; height: number; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### Interfaces


#### Boolean

| Method      | Signature        | Description                                          |
| ----------- | ---------------- | ---------------------------------------------------- |
| **valueOf** | () =&gt; boolean | Returns the primitive value of the specified object. |

</docgen-api>
